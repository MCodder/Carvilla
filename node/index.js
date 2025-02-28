const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const data =[
   {
   id:1,
   h3:"Largest Dealership  of Car",
   h4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet."
},
   {
   id:2,
   h3:"Unlimited Repair Warrenty",
   h4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet."
},
   {
   id:3,
   h3:"Insurence Support",
   h4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet."
}
]


const data2 =[
   {
   "id":1,
   "h4":"BMW 6-Series Gran Coupe",
   "h5":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
   "rupee":"$89,395",
   "model":"2017 3100 MI 240HP Automatic",
   // img:Image1
},
   {
   id:2,
   h4:"BMW 6-Series Gran Coupe",
   h5:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
   rupee:"$89,495",                          
   model:"2017 4100 MI 240HP Automatic",
   // img:Image2
},
   {
   id:3,
   h4:"BMW 6-Series Gran Coupe",
   h5:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
   rupee:"$89,495",
   model:"2017 4100 MI 240HP Automatic",
   // img:Image3
},
   {
   id:4,
   h4:"BMW 6-Series Gran Coupe",
   h5:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
   rupee:"$89,495",
   model:"2017 4100 MI 240HP Automatic",
   // img:Image4
}
]

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/Cads', (req, res) => {
  res.send(data);
});

app.get('/Featured', (req, res) => {
  res.send(data2);
});

// // Connect to MongoDB
// const mongoURI = "mongodb://localhost:27017/Basic"; // Replace with your MongoDB URI
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("Connected to MongoDB")) //(then sucess ke liye use krte hai)
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Define a Mongoose schema and model
// const profileSchema = new mongoose.Schema({
//   id: Number,
//   link: String,
//   name: String,
//   desc: String,
// });

// const Profile = mongoose.model("Profile", profileSchema);

// const data = [
//   {
//     id: "1",
//     name: "Tehseen",
//     address: {
//       city: "Mumbra",
//       state: "Maha",
//     },
//     images: ["img1", "img2"],

//     imagesWithKey: [
//       {
//         path: "/images",
//         name: "img1",
//       },
//       {
//         path: "/images",
//         name: "img2",
//       },
//     ],
//   },
//   {
//     id: "2",
//     name: "Rumana",
//     address: {
//       city: "kausa",
//       state: "Maha",
//     },
//     images: ["img1", "img2"],

//     imagesWithKey: [
//       {
//         path: "/images",
//         name: "img2",
//       },
//       {
//         path: "/images",
//         name: "img1",
//       },
//     ],
//   },
//   {
//     id: "3",
//     name: "moin",
//     address: {
//       city: "Mumbra",
//       state: "Maha",
//     },
//     images: ["img1", "img2"],

//     imagesWithKey: [
//       {
//         path: "/images",
//         name: "img3",
//       },
//       {
//         path: "/images",
//         name: "img4",
//       },
//     ],
//   },
// ];

// const profiles = [
//   {
//     id: 1,
//     link: "Tehseen-student",
//     name: "Tehseen",
//     desc: "student",
//   },
//   {
//     id: 2,
//     link: "Nawaf-student",
//     name: "Nawaf",
//     desc: "student",
//   },
//   {
//     id: 3,
//     link: "moin-student",
//     name: "Moin",
//     desc: "student",
//   },
//   {
//     id: 4,
//     link: "Basheer-student",
//     name: "Basheer",
//     desc: "student",
//   },
// ];

// / => http://basheer.com -> endpoint / api
// app.get("/", (req, res) => {
//   res.send("Test 9");
// });

// app.get("/home", (req, res) => {
//   const result = data.filter((item) => {
//     const naam = item.imagesWithKey.findIndex((obj) => {
//       return obj.name == "img1";
//     });
//     if (naam == -1) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   res.send(result);
// });

// app.get("/profiles", async (req, res) => {
//   const profiles = await Profile.find(); // Fetch all profiles from MongoDB
//   res.status(200).send(profiles.length !== 0 ? profiles: []);
//   console.log(profiles);
// });

// app.get("/profile/:id", async (req, res) => {
//   const newId = req.params.id;
//   const profile = await Profile.findOne({ id: newId });
//   // const profile = profiles.find((profile) => {
//   //   return profile.id == id;
//   // });

//   res.send(profile ?? "Not found");
// });

//create new profile

// app.post("/profileCreate/", async (req, res) => {
//   const profile = req.body;
//   const newProfile = new Profile(profile);
//   await newProfile.save();
//   const profiles = await Profile.find();
//   res.status(200).json(profiles);  //(json.pars )
// });

// app.put("/profileEdit/", async (req, res) => {
//   const profile = req.body;
//   const result = await Profile.updateOne({ id: profile.id }, { $set: profile }); //(updateOne ka parameter set krtahai $dollar ka sign)
//   if (result.matchedcount === 0) res.status(404).send("Not found"); 

//   const profiles = await Profile.find();
//   res.status(200).json(profiles);

//   // Algorithm
//   // step1: Save req data in profile variable
//   // step2: Find index
//   // step3: Check index is there or not
//   // step4: Replace the new value
//   // step5: Return updated value

//   // save req data in profile variable

// });

// //Delete profile

// app.delete("/profiledelete/:id", async (req, res) => {
//   const id = req.params.id;
  
//   try {
//     // Find and delete the document by ID
//     const deleteProfile = await Profile.findOneAndDelete({ id:id});
//     if (!deleteProfile) {
//       return res.status(404).send("Profile not found");
//     }

//     const profiles = await Profile.find();
//     return res.status(200).send(profiles);
//   } catch (error) {
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen('8000', () => {
  console.log(`Server running at `);
});
