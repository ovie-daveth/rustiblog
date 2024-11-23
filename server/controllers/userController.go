package controllers

import (
	"net/http"

	"rustiblog.com/server/database"
	"rustiblog.com/server/models"
	response "rustiblog.com/server/utils"

	"github.com/gin-gonic/gin"
)

// Create a new user
func CreateUser(c *gin.Context) {
	var user models.User

	// Bind JSON to user model
	if err := c.ShouldBindJSON(&user); err != nil {
		response.Respond(c, http.StatusBadRequest, "Invalid input", false, err.Error())
		return
	}

	// Perform model validation
	if err := user.Validate(); err != nil {
		response.Respond(c, http.StatusBadRequest, "Validation failed", false, err.Error())
		return
	}

	// Hash the user's password
	if err := user.HashPassword(); err != nil {
		response.Respond(c, http.StatusInternalServerError, "Failed to hash password", false, err.Error())
		return
	}

	// Save user to database
	if err := database.DB.Create(&user).Error; err != nil {
		response.Respond(c, http.StatusInternalServerError, "Failed to create user", false, err.Error())
		return
	}

	response.Respond(c, http.StatusCreated, "User created successfully", true, user)
}

func LoginUser(c *gin.Context) {
	var user models.User
	var req models.LoginRequest

	// Bind input JSON
	if err := c.ShouldBindJSON(&req); err != nil {
		response.Respond(c, http.StatusBadRequest, "Invalid input", false, err.Error())
		return
	}

	// Find user by email
	if err := database.DB.Where("email = ?", req.Email).First(&user).Error; err != nil {
		response.Respond(c, http.StatusUnauthorized, "Invalid credentials", false, nil)
		return
	}

	// Compare passwords
	if !user.ComparePassword(req.Password) {
		response.Respond(c, http.StatusUnauthorized, "Invalid credentials", false, nil)
		return
	}

	response.Respond(c, http.StatusOK, "Login successful", true, user)
}

// Get all users
func GetUsers(c *gin.Context) {
	var users []models.User

	// Ensure database connection is available
	if database.DB == nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection not established"})
		return
	}

	// Fetch users from the private.users table
	if err := database.DB.Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, users)
}

// Get a user by ID
func GetUserByID(c *gin.Context) {
	id := c.Param("id")
	var user models.User

	if err := database.DB.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.JSON(http.StatusOK, user)
}

// Delete a user by ID
func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	if err := database.DB.Delete(&models.User{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User deleted"})
}
