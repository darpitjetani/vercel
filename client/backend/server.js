  const express = require('express');
  const dotenv = require('dotenv');
  const cors = require("cors");
  const connectDB = require('./config/db.js');
  const authRoutes = require("./routes/authRoute");
  const multer = require("multer");
  const fs = require('fs');
  const path = require('path');
  const { default: mongoose } = require('mongoose');
  const overrideing = require("method-override");
  const bodyParser = require('body-parser');
  const User = require('./models/userModel');
  const Counter = require('./models/Counter');
  dotenv.config();

  connectDB(); 

  const app = express();
  app.use(bodyParser.json())
  app.use(express.static('public'));

  // app.use((req, res) => {
  //   res.status(404);
  //   res.send(`<h1>Error 404: Resource not found</h1>`);
  // })

  app.use('/api', authRoutes);


const bcrypt = require('bcryptjs');
const crypto = require('crypto');

async function generateUniqueCode() {
  try {
    const counter = await Counter.findOneAndUpdate(
      { id: 'userCode' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    
    console.log('Counter:', counter);

    const uniqueCode = `DBP-${counter.seq.toString().padStart(4, '0')}`;
    return uniqueCode;
  } catch (error) {
    console.error('Error generating unique code:', error);
    throw error;
  }
}


// User Registration Endpoint
app.post('/api/v1/auth/register', async (req, res) => {
  try {
    const { firstname, middlename, lastname, address, aadhaar, pan, photo, email, mobile, password, referenceCode } = req.body;

    console.log('Request Body:', req.body);

    const userCount = await User.countDocuments();
    console.log('User Count:', userCount);

    if (userCount === 0) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstname,
        middlename,
        lastname,
        address,
        aadhaar,
        pan,
        photo,
        email,
        mobile,
        password: hashedPassword,
        code: "DBP-1101",
        referenceCode: "N/A"
      });

      await newUser.save();

      return res.status(201).json({ message: 'First user registered successfully', code: "DBP-1101" });
    }

    const referrer = await User.findOne({ code: referenceCode });
    console.log('Referrer:', referrer);

    if (!referrer) {
      return res.status(400).json({ message: 'Invalid reference code. You cannot register without a valid reference code.' });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
    console.log('Existing User:', existingUser);

    if (existingUser) {
      return res.status(400).json({ message: 'Email or mobile is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);

    const code = await generateUniqueCode();
    console.log('Generated Code:', code);

    const newUser = new User({
      firstname,
        middlename,
        lastname,
        address,
        aadhaar,
        pan,
        photo,
        email,
        mobile,
        password: hashedPassword,
        code,
        referenceCode
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', code });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Same aadhar and pan number' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
});

              
app.use(cors({
  origin: 'https://digitalbusinessplan.in', 
  credentials: true
}));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const storage = multer.diskStorage({
      destination: function (req, file, cb) {
          const dir = path.join(__dirname, 'public', 'Images');

          if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true }); 
          }
          cb(null, dir);
      }, 
      filename: function (req, file, cb) { 
          cb(null, `${Date.now()}_${file.originalname}`);
      }
  });
      
  const upload = multer({ storage });

  app.post('/upload', upload.single('file'), (req, res) => {
      console.log("Body:", req.body);
      console.log("File:", req.file);
      const fileDetails = { 
          originalname: req.file.originalname,
          mimetype: req.file.mimetype,
          size: req.file.size,
          path: req.file.path,
      };  
      res.json({
          message: 'File uploaded successfully',
          file: fileDetails
      });
  });


  app.use('/api/v1/auth', require('./routes/authRoute')); 

  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });


  // app.use("/api/v1/auth", authRoutes);

  app.get("/", (req, res) => {
      res.send("<h1>Welcome to ecommerce</h1>");
  });

  const PORT = process.env.PORT || 5000; 

  app.listen(PORT, () => {
      console.log(`Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`);
  });


  // mongodb+srv://darshil:Darshil%402002@cluster0.szdeu42.mongodb.net //
