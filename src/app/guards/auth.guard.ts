// Import necessary Angular modules and dependencies
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from "jwt-decode";

// Interface representing the payload of a JWT token
interface JwtPayload {
  exp: number; // Expiration time
  claims: string[]; // Array of claims
}

// Function to check if a specific claim exists in the JWT payload
function hasClaim(claimType: string): boolean {
  const token = localStorage.getItem('ACCESS_TOKEN'); // Get the access token from local storage
  if (!token) return false; // If no token exists, return false

  try {
    const decoded: JwtPayload = jwtDecode(token); // Decode the JWT token
    return decoded.claims && decoded.claims.includes(claimType); // Check if the specified claim exists in the decoded token
  } catch (error) {
    console.error('Could not decode token', error); // Log an error if decoding fails
    return false;
  }
}

// Custom Angular route guard function
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject the Router service

  // Check if the user has a valid access token and the 'admin' claim
  if (localStorage.getItem('ACCESS_TOKEN') && hasClaim('admin')) {
    return true; // Allow access to the route
  }

  // If not, navigate to the login route
  router.navigateByUrl('/login');
  return false; // Deny access to the route
};
