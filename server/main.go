package main

import (
	"rustiblog.com/server/database"
	"rustiblog.com/server/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	database.ConnectDB()

	// Initialize Gin router
	router := gin.Default()

	// Setup routes
	routes.RegisterRoutes(router)

	// Start the server
	router.Run(":8080")
}
