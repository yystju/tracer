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

	r.GET("/api/about", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.StaticFile("/favicon.ico", "./static/build/favicon.ico")
	r.Static("/assets", "./static/build/assets")
	r.StaticFS("/static", http.Dir("./static/build"))

	r.StaticFS("/learn", http.Dir("./learn/dist"))

	r.RunTLS(":8443", "./cert/server.pem", "./cert/server.key")
}
