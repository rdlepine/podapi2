const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
} = require("../handlers/employee");

// prefix - /api/employees/:id/messages
router.route("/").post(createEmployee);
router.route("/").get(getEmployees)
// prefix - /api/employees/:id/messages/:message_id
router
  .route("/:_id")
  .get(getEmployee)
  .delete(deleteEmployee);

module.exports = router;
