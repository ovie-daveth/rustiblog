package routes

import (
	"github.com/gin-gonic/gin"
	"rustiblog.com/server/controllers"
)

func RegisterRoutes(router *gin.Engine) {
	// Group routes under /users
	userRoutes := router.Group("/users")
	{
		userRoutes.POST("/", controllers.CreateUser)
		userRoutes.GET("/", controllers.GetUsers)
		userRoutes.GET("/:id", controllers.GetUserByID)
		userRoutes.DELETE("/:id", controllers.DeleteUser)
	}
}
