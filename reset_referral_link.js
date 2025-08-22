const Users = require("./model/user")

const reset_link = async () => {
  try {
    const users = await Users.find()

    for (const user of users) {
        user.set({
            referral_link:`https://crescentpips.ltd?${user._id}`
        })
    //   user.referralLink = `https://crescentpips.ltd?${user._id}` // or user.userID if that field exists
      await user.save()
      console.log(`Updated referral link for user: ${user}}`)
    }

    console.log("Referral links updated for all users.")
  } catch (err) {
    console.error("Error updating referral links:", err)
  }
}

reset_link()
