export const handleApiError = (error) => {
    // If error has response data
    if (error.response?.data) {
      const { errors, message } = error.response.data;
  
      // Handle validation errors (email, password, name, etc)
      if (errors && typeof errors === 'object') {
        // Get first error message from each field
        const messages = Object.values(errors)
          .map(fieldErrors => fieldErrors[0])
          .filter(Boolean);
        return messages[0] || 'An error occurred';
      }
  
      // Handle single message errors
      if (message) {
        return Array.isArray(message) ? message[0] : message;
      }
    }
  
    // Fallback error message
    return 'Something went wrong. Please try again.';
  };
  