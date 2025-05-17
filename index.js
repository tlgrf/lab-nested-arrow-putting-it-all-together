/**
 * Creates a login tracker for a given user.
 * @param {{ username: string, password: string }} userInfo
 * @returns {(passwordAttempt: string) => string}
 */
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  return (passwordAttempt) => {
    attemptCount++;
    // Lock account after more than 3 failed attempts
    if (attemptCount > 3) {
      return 'Account locked due to too many failed login attempts';
    }
    // Check password
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }
    // Report failed attempt
    return `Attempt ${attemptCount}: Login failed`;
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};