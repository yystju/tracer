package main

import (
	"flag"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	name string
)

func init() {
	flag.StringVar(&name, "n", "world", "...")
	flag.Parse()
}

func main() {
	fmt.Println(name)

	r := gin.Default()

	r.Static("/assets", "./assets")
	r.StaticFile("/favicon.ico", "./assets/favicon.ico")
	r.StaticFS("/static", http.Dir("./static/build"))

	r.GET("/api/about", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.RunTLS(":8443", "./cert/server.pem", "./cert/server.key")
}
