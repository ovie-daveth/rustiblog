package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID       uint   `json:"id" gorm:"primaryKey"`
	Username string `json:"username" gorm:"unique;not null"`
	Email    string `json:"email" gorm:"unique;not null"`
	Password string `json:"password"`
}
