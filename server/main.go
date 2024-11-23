package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"rustiblog.com/server/database"
	"rustiblog.com/server/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	database.ConnectDB()

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
		log.Printf("Server starting on port: %s", PORT)
	}

	router := gin.Default()

	routes.RegisterRoutes(router)

	router.Run(":" + PORT)
}
