import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ListingFilterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - prefixed with /api
  const apiRouter = express.Router();
  
  // Get all spore listings with optional filtering
  apiRouter.get('/listings', async (req, res) => {
    try {
      // Parse and validate query parameters
      const validatedFilter = ListingFilterSchema.parse({
        search: req.query.search,
        verificationStatus: req.query.status,
        sortBy: req.query.sortBy
      });
      
      const listings = await storage.getSporeListings(validatedFilter);
      
      // Enhance listings with user information
      const enhancedListings = await Promise.all(
        listings.map(async (listing) => {
          const user = await storage.getUser(listing.userId);
          return {
            ...listing,
            seller: user ? {
              id: user.id,
              username: user.username,
              displayName: user.displayName,
              trustScore: user.trustScore,
              isVerified: user.isVerified
            } : undefined
          };
        })
      );
      
      res.json(enhancedListings);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid filter parameters", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to retrieve listings" });
      }
    }
  });
  
  // Get a single spore listing by ID
  apiRouter.get('/listings/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const listing = await storage.getSporeListing(id);
      if (!listing) {
        return res.status(404).json({ message: "Listing not found" });
      }
      
      // Get seller information
      const user = await storage.getUser(listing.userId);
      
      // Get DNA verification if available
      let verification = undefined;
      if (listing.dnaVerificationId) {
        verification = await storage.getDnaVerificationByVerificationId(listing.dnaVerificationId);
      }
      
      res.json({
        ...listing,
        seller: user ? {
          id: user.id,
          username: user.username,
          displayName: user.displayName,
          trustScore: user.trustScore,
          isVerified: user.isVerified
        } : undefined,
        verification: verification ? {
          id: verification.id,
          verificationId: verification.verificationId,
          mushroomVariety: verification.mushroomVariety,
          verificationDate: verification.verificationDate,
          laboratoryId: verification.laboratoryId,
          blockchainRecordId: verification.blockchainRecordId
        } : undefined
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve listing" });
    }
  });
  
  // Get DNA verification by ID
  apiRouter.get('/verifications/:id', async (req, res) => {
    try {
      // Handle both numeric IDs and verification IDs
      const id = req.params.id;
      let verification;
      
      if (/^\d+$/.test(id)) {
        // If ID is numeric, find by numeric ID
        verification = await storage.getDnaVerification(parseInt(id));
      } else {
        // Otherwise find by verification ID string
        verification = await storage.getDnaVerificationByVerificationId(id);
      }
      
      if (!verification) {
        return res.status(404).json({ message: "Verification not found" });
      }
      
      res.json(verification);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve verification" });
    }
  });
  
  // Register the API router with the /api prefix
  app.use('/api', apiRouter);
  
  const httpServer = createServer(app);
  return httpServer;
}
