const cloudinary = require("../middleware/cloudinary");
const Calculation = require("../models/Calculation");

module.exports = {
  getProfile: async (req, res) => { 
    console.log(req.user)
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
      const calculation = await Calculation.find({ user: req.user.id });
      //Sending post data from mongodb and user data to ejs template
      res.render("profile.ejs", { calculation: calculation, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getCalculation: async (req, res) => {
    try {
      //id parameter comes from the post routes
      //router.get("/:id", ensureAuth, postsController.getPost);
      //http://localhost:2121/post/631a7f59a3e56acfc7da286f
      //id === 631a7f59a3e56acfc7da286f
      const calculation = await Calculation.findById(req.params.id);
      res.render("calculation.ejs", { calculation: calculation, user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createCalculation: async (req, res) => {
    try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req.file.path);

      //media is stored on cloudainary - the above request responds with url to media and the media id that you will need when deleting content 
      await Calculation.create({
        eventName: req.body.eventName,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        dateOfEvent: req.body.dateOfEvent,
        hoursStart: req.body.hoursStart,
        hoursEnd: req.body.hoursEnd,
        amountUSD: req.body.amountUSD,
        hoursSpent: 0,
        totalUSD: 0,
        // likes: 0,
        user: req.user.id,
      });
      console.log("Calculation has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likeCalculation: async (req, res) => {
    try {
      await Calculation.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { totalUSD: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/calculation/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteCalculation: async (req, res) => {
    try {
      // Find post by id
      let calculation = await Calculation.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(recipe.cloudinaryId);
      // Delete post from db
      await Calculation.deleteOne({ _id: req.params.id });
      console.log("Deleted Calculation");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
