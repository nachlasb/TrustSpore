import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  displayName: text("display_name"),
  email: text("email").notNull().unique(),
  trustScore: integer("trust_score").default(0),
  isVerified: boolean("is_verified").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Spore listing model
export const sporeListings = pgTable("spore_listings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  scientificName: text("scientific_name"),
  description: text("description"),
  generation: integer("generation").default(1),
  isVerified: boolean("is_verified").default(false),
  dnaVerificationId: text("dna_verification_id"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Marketplace search filters
export const ListingFilterSchema = z.object({
  search: z.string().optional(),
  verificationStatus: z.enum(['all', 'verified', 'standard']).optional(),
  sortBy: z.enum(['trust', 'recent', 'name']).optional(),
});

// DNA verification record model
export const dnaVerifications = pgTable("dna_verifications", {
  id: serial("id").primaryKey(),
  verificationId: text("verification_id").notNull().unique(),
  userId: integer("user_id").notNull().references(() => users.id),
  mushroomVariety: text("mushroom_variety").notNull(),
  geneticMarkers: jsonb("genetic_markers"),
  verificationDate: timestamp("verification_date").defaultNow().notNull(),
  laboratoryId: text("laboratory_id"),
  blockchainRecordId: text("blockchain_record_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Create insertion schemas
export const insertUserSchema = createInsertSchema(users).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const insertSporeListingSchema = createInsertSchema(sporeListings).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const insertDnaVerificationSchema = createInsertSchema(dnaVerifications).omit({ 
  id: true, 
  createdAt: true 
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type SporeListing = typeof sporeListings.$inferSelect;
export type InsertSporeListing = z.infer<typeof insertSporeListingSchema>;

export type DnaVerification = typeof dnaVerifications.$inferSelect;
export type InsertDnaVerification = z.infer<typeof insertDnaVerificationSchema>;

export type ListingFilter = z.infer<typeof ListingFilterSchema>;
