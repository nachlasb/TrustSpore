import { 
  User, InsertUser, 
  SporeListing, InsertSporeListing,
  DnaVerification, InsertDnaVerification,
  ListingFilter
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Spore listing operations
  getSporeListing(id: number): Promise<SporeListing | undefined>;
  getSporeListings(filter?: ListingFilter): Promise<SporeListing[]>;
  getSporeListingsByUser(userId: number): Promise<SporeListing[]>;
  createSporeListing(listing: InsertSporeListing): Promise<SporeListing>;
  updateSporeListing(id: number, data: Partial<InsertSporeListing>): Promise<SporeListing | undefined>;
  deleteSporeListing(id: number): Promise<boolean>;
  
  // DNA verification operations
  getDnaVerification(id: number): Promise<DnaVerification | undefined>;
  getDnaVerificationByVerificationId(verificationId: string): Promise<DnaVerification | undefined>;
  createDnaVerification(verification: InsertDnaVerification): Promise<DnaVerification>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private sporeListings: Map<number, SporeListing>;
  private dnaVerifications: Map<number, DnaVerification>;
  private currentUserId: number;
  private currentListingId: number;
  private currentVerificationId: number;

  constructor() {
    this.users = new Map();
    this.sporeListings = new Map();
    this.dnaVerifications = new Map();
    this.currentUserId = 1;
    this.currentListingId = 1;
    this.currentVerificationId = 1;
    
    // Add some demo data
    this.initializeDemoData();
  }

  // Initialize some demo data
  private initializeDemoData() {
    // Create demo users
    const user1 = this.createUser({
      username: "johndoe",
      password: "password123",
      displayName: "John Doe",
      email: "john@example.com",
      trustScore: 45,
      isVerified: true
    });

    const user2 = this.createUser({
      username: "sporeguru",
      password: "password123",
      displayName: "Spore Guru",
      email: "guru@example.com",
      trustScore: 50,
      isVerified: true
    });

    const user3 = this.createUser({
      username: "mushroomwizard",
      password: "password123",
      displayName: "Mushroom Wizard",
      email: "wizard@example.com",
      trustScore: 35,
      isVerified: false
    });

    // Create DNA verifications
    const verification1 = this.createDnaVerification({
      verificationId: "PO-21F4A3B5-87C2",
      userId: user1.id,
      mushroomVariety: "Blue Oyster",
      geneticMarkers: {},
      verificationDate: new Date("2023-05-15"),
      laboratoryId: "LAB001",
      blockchainRecordId: "BLK12345"
    });

    const verification2 = this.createDnaVerification({
      verificationId: "HE-98C7D2A1-45B3",
      userId: user2.id,
      mushroomVariety: "Lion's Mane",
      geneticMarkers: {},
      verificationDate: new Date("2023-04-20"),
      laboratoryId: "LAB002",
      blockchainRecordId: "BLK67890"
    });

    // Create spore listings
    this.createSporeListing({
      userId: user1.id,
      name: "Blue Oyster",
      scientificName: "Pleurotus ostreatus",
      description: "High-quality blue oyster spores, third generation from verified source.",
      generation: 3,
      isVerified: true,
      dnaVerificationId: verification1.verificationId,
      imageUrl: "https://pixabay.com/get/gd1f02ead889c17bfa321c41743554d077ea019d9a0db7155e3da58d5f5bc879bf47208d541794d814a56c4e2af16684b29d570545d6f95714a0bb2d0a61faf48_1280.jpg"
    });

    this.createSporeListing({
      userId: user2.id,
      name: "Lion's Mane",
      scientificName: "Hericium erinaceus",
      description: "Rare lion's mane spores, verified genetics, excellent medicinal properties.",
      generation: 2,
      isVerified: true,
      dnaVerificationId: verification2.verificationId,
      imageUrl: "https://pixabay.com/get/g1b6791d1082f4b3083c079adf4edc0699a34811230aa3e7461b0c4e0c23c00411980b4abdeeb4dc10cca474a024a7c262088a0a541f5dfd193c87222b312fb0f_1280.jpg"
    });

    this.createSporeListing({
      userId: user3.id,
      name: "Reishi",
      scientificName: "Ganoderma lucidum",
      description: "First generation reishi spores, excellent for beginners.",
      generation: 1,
      isVerified: false,
      imageUrl: "https://pixabay.com/get/g018d3b1174e360a9393b4d66d05be17a44974a7f6459401f4c657d30b9e11f478d3c19aa5005cd1ff68e74ff612e0de3cc243b458132297f5afd1d7b2c9b782c_1280.jpg"
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: now,
      updatedAt: now
    };
    this.users.set(id, user);
    return user;
  }

  // Spore listing methods
  async getSporeListing(id: number): Promise<SporeListing | undefined> {
    return this.sporeListings.get(id);
  }

  async getSporeListings(filter?: ListingFilter): Promise<SporeListing[]> {
    let listings = Array.from(this.sporeListings.values());
    
    if (filter) {
      // Apply search filter
      if (filter.search) {
        const searchLower = filter.search.toLowerCase();
        listings = listings.filter(
          (listing) => 
            listing.name.toLowerCase().includes(searchLower) || 
            (listing.scientificName && listing.scientificName.toLowerCase().includes(searchLower)) ||
            (listing.description && listing.description.toLowerCase().includes(searchLower))
        );
      }
      
      // Apply verification status filter
      if (filter.verificationStatus) {
        if (filter.verificationStatus === 'verified') {
          listings = listings.filter(listing => listing.isVerified);
        } else if (filter.verificationStatus === 'standard') {
          listings = listings.filter(listing => !listing.isVerified);
        }
      }
      
      // Apply sorting
      if (filter.sortBy) {
        if (filter.sortBy === 'trust') {
          // Sort by trust score (requires fetching users)
          listings = listings.sort((a, b) => {
            const userA = this.users.get(a.userId);
            const userB = this.users.get(b.userId);
            return (userB?.trustScore || 0) - (userA?.trustScore || 0);
          });
        } else if (filter.sortBy === 'recent') {
          // Sort by created date, newest first
          listings = listings.sort((a, b) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else if (filter.sortBy === 'name') {
          // Sort alphabetically by name
          listings = listings.sort((a, b) => a.name.localeCompare(b.name));
        }
      }
    }
    
    return listings;
  }

  async getSporeListingsByUser(userId: number): Promise<SporeListing[]> {
    return Array.from(this.sporeListings.values()).filter(
      (listing) => listing.userId === userId
    );
  }

  async createSporeListing(insertListing: InsertSporeListing): Promise<SporeListing> {
    const id = this.currentListingId++;
    const now = new Date();
    const listing: SporeListing = {
      ...insertListing,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.sporeListings.set(id, listing);
    return listing;
  }

  async updateSporeListing(id: number, data: Partial<InsertSporeListing>): Promise<SporeListing | undefined> {
    const listing = this.sporeListings.get(id);
    if (!listing) return undefined;
    
    const updatedListing: SporeListing = {
      ...listing,
      ...data,
      updatedAt: new Date()
    };
    
    this.sporeListings.set(id, updatedListing);
    return updatedListing;
  }

  async deleteSporeListing(id: number): Promise<boolean> {
    return this.sporeListings.delete(id);
  }

  // DNA verification methods
  async getDnaVerification(id: number): Promise<DnaVerification | undefined> {
    return this.dnaVerifications.get(id);
  }

  async getDnaVerificationByVerificationId(verificationId: string): Promise<DnaVerification | undefined> {
    return Array.from(this.dnaVerifications.values()).find(
      (verification) => verification.verificationId === verificationId
    );
  }

  async createDnaVerification(insertVerification: InsertDnaVerification): Promise<DnaVerification> {
    const id = this.currentVerificationId++;
    const now = new Date();
    const verification: DnaVerification = {
      ...insertVerification,
      id,
      createdAt: now
    };
    this.dnaVerifications.set(id, verification);
    return verification;
  }
}

export const storage = new MemStorage();
