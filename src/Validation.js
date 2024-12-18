function validation(data) {
    const errors = {};
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
  
    if (!data.name.trim()) {
      errors.name = "Name is required.";
    }
  
    if (!data.employeeId.trim()) {
      errors.employeeId = "Employee ID is required.";
    } else if (data.employeeId.length > 10) {
      errors.employeeId = "Employee ID cannot exceed 10 characters.";
    }
  
    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(data.email)) {
      errors.email = "Invalid email format.";
    }
  
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phonePattern.test(data.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
  
    if (!data.department.trim()) {
      errors.department = "Department is required.";
    }
  
    if (!data.dateOfJoining.trim()) {
      errors.dateOfJoining = "Date of Joining is required.";
    } else if (new Date(data.dateOfJoining) > new Date()) {
      errors.dateOfJoining = "Date of Joining cannot be in the future.";
    }
  
    if (!data.role.trim()) {
      errors.role = "Role is required.";
    }
  
    return errors;
  }
  
  export default validation;
  