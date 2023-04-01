package api

import (
	"database/sql"
	"net/http"

	"github.com/cqhung1412/arent-healthy-app/backend/token"
	"github.com/gin-gonic/gin"
)

func (server *Server) getMeals(ctx *gin.Context) {
	authPayload := ctx.MustGet(authPayloadKey).(*token.Payload)

	meals, err := server.store.GetMealsByUserID(ctx, sql.NullInt64{Int64: authPayload.UserID, Valid: true})
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			return
		}

		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, meals)
}
