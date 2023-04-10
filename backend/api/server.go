package api

import (
	"fmt"

	db "github.com/cqhung1412/arent-healthy-app/backend/db/sqlc"
	"github.com/cqhung1412/arent-healthy-app/backend/token"
	"github.com/cqhung1412/arent-healthy-app/backend/util"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Server struct {
	config     util.Config
	store      db.Store
	tokenMaker token.Maker
	router     *gin.Engine
}

func (server *Server) setupRouter() {
	router := gin.Default()
	router.Use(cors.Default())

	apiGroup := router.Group("/api")

	apiGroup.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{"data": "hello world"})
	})
	apiGroup.POST("/user/login", server.loginUser)

	authRoutes := apiGroup.Group("/").Use(authMiddleware(server.tokenMaker))
	authRoutes.GET("/meals", server.getMeals)
	authRoutes.GET("/exercises", server.getExercises)
	authRoutes.GET("/diary-entries", server.getDiaryEntries)
	authRoutes.GET("/body-composition", server.getBodyComposition)

	server.router = router
}

func NewServer(config util.Config, store db.Store) (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	// tokenMaker, err := token.NewJWTMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		store:      store,
		tokenMaker: tokenMaker,
	}

	server.setupRouter()
	return server, nil
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}

func (server *Server) Start(address string) error {
	return server.router.Run(address)
}
