const db = require("../models");

exports.createEmployee = async function(req, res, next) {
  try {
    let employee = await db.Employee.create({
      email: req.body.email,
      firstName: req.params.firstName,
      lastName: req.params.lastName,
      phone: req.params.phone,
      password: req.params.password,
      profileImageUrl: req.params.profileImageUrl,
      empType: {
          isAdmin: req.body.isAdmin,
          isDriver: req.body.isDriver,
        },
    })

    let foundEmployee = await db.Employee.find(req.params.email);
    if(foundEmployee) {
      return res.status(200).json({"message":"Employee Exists"});
    } else {
      await foundEmployee.save();
      return res.status(200).json(foundEmployee);
    }
   
  } catch (err) {
    return next(err);
  }
}

// GET - /api/users/:id/messages/:message_id
exports.getEmployees = async function(req, res, next) {
  try {
    let employees = await db.Employee.find();
    return res.status(200).json(employees);
  } catch (err) {
    return next(err);
  }
};

// GET - /api/users/:id/messages/:message_id
exports.getEmployee = async function(req, res, next) {
  try {
    let employee = await db.Message.find(req.params._id);
    return res.status(200).json(employee);
  } catch (err) {
    return next(err);
  }
}

// DELETE /api/users/:id/messages/:message_id
exports.deleteEmployee = async function(req, res, next) {
  try {
    let employee = await db.Employee.findById(req.params._id);
    await employee.remove();

    return res.status(200).json(employee);
  } catch (err) {
    return next(err);
  }
}
