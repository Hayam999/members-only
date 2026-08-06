import { updateMembershipStatus } from "../models/utils.js";

export default async function clubHouseController(req, res, next) {
  try {
    const membershipStatus = req.body.secretCode;
    req.session.user.membershipStatus = membershipStatus;
    const userId = req.session.user.id;
    console.log(
      `Updating membership status for user ${userId} to ${membershipStatus}`,
    );
    await updateMembershipStatus(membershipStatus, userId);
    next();
  } catch (err) {
    console.error(`Failed to update membership status`, err);
    res.status(500).render("error", {
      message: "Failed to update membership status",
    });
  }
}
