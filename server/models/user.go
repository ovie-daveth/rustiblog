package models

import (
	"errors"
	"strings"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID        int       `gorm:"primaryKey"`
	Name      string    `gorm:"not null"`
	Password  string    `gorm:"not null"`
	Email     string    `gorm:"unique;not null"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// TableName specifies the schema and table name
func (User) TableName() string {
	return "private.users" // Schema name + table name
}

// Validate performs model-specific validation
func (u *User) Validate() error {
	// Check for empty name
	if strings.TrimSpace(u.Name) == "" {
		return errors.New("name cannot be empty")
	}

	// Name length check
	if len(u.Name) < 3 {
		return errors.New("name must be at least 3 characters long")
	}

	// Check for empty email
	if strings.TrimSpace(u.Email) == "" {
		return errors.New("email cannot be empty")
	}

	// Basic email format validation
	if !strings.Contains(u.Email, "@") || !strings.Contains(u.Email, ".") {
		return errors.New("email must be a valid email address")
	}

	// Check for empty password
	if strings.TrimSpace(u.Password) == "" {
		return errors.New("password cannot be empty")
	}

	// Password length check
	if len(u.Password) < 6 {
		return errors.New("password must be at least 6 characters long")
	}

	return nil
}

// HashPassword encrypts the user's password
func (u *User) HashPassword() error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hashedPassword)
	return nil
}

// ComparePassword checks if the provided password matches the hashed password
func (u *User) ComparePassword(password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(password))
	return err == nil
}
