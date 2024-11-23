package utils

import "github.com/gin-gonic/gin"

type StandardResponse struct {
	Message string      `json:"message"`
	Status  bool        `json:"status"`
	Data    interface{} `json:"data,omitempty"`
}

func Respond(c *gin.Context, httpStatus int, message string, status bool, data interface{}) {
	c.JSON(httpStatus, StandardResponse{
		Message: message,
		Status:  status,
		Data:    data,
	})
}
