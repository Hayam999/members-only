import { updateMemberShipStatusQuery } from "../db/queries.js";
export async function updateMembershipStatus(membershipStatus, userId) {
  try {
    const result = await updateMemberShipStatusQuery(membershipStatus, userId);
    return result;
  } catch (err) {
    console.error(`Failed to update membership status`, err);
    throw err;
  }
}
