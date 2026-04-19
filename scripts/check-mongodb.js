// Script to check MongoDB connection and data
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

async function checkDatabase() {
  try {
    console.log('🔍 Connecting to MongoDB...');
    console.log('URI:', MONGODB_URI?.substring(0, 30) + '...');
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!\n');

    // Get database name
    const dbName = mongoose.connection.db.databaseName;
    console.log('📊 Database Name:', dbName);

    // List all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n📁 Collections in database:');
    collections.forEach(col => {
      console.log(`  - ${col.name}`);
    });

    // Check Portfolio collection
    console.log('\n🎨 Checking Portfolio collection...');
    const Portfolio = mongoose.connection.db.collection('portfolios');
    const portfolioCount = await Portfolio.countDocuments();
    console.log(`  Total portfolios: ${portfolioCount}`);

    if (portfolioCount > 0) {
      console.log('\n  Sample portfolios:');
      const samples = await Portfolio.find({}).limit(5).toArray();
      samples.forEach((p, i) => {
        console.log(`  ${i + 1}. ${p.title} (ID: ${p._id})`);
      });
    } else {
      console.log('  ⚠️ No portfolios found in database!');
    }

    // Check Services collection
    console.log('\n🛠️ Checking Services collection...');
    const Service = mongoose.connection.db.collection('services');
    const serviceCount = await Service.countDocuments();
    console.log(`  Total services: ${serviceCount}`);

    // Check Contacts collection
    console.log('\n📧 Checking Contacts collection...');
    const Contact = mongoose.connection.db.collection('contacts');
    const contactCount = await Contact.countDocuments();
    console.log(`  Total contacts: ${contactCount}`);

    // Check Admins collection
    console.log('\n👤 Checking Admins collection...');
    const Admin = mongoose.connection.db.collection('admins');
    const adminCount = await Admin.countDocuments();
    console.log(`  Total admins: ${adminCount}`);

    console.log('\n✅ Database check complete!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Connection closed');
  }
}

checkDatabase();
