;if expressions
(define WIDTH 100)
(define HEIGHT 100)
(> WIDTH HEIGHT)
(> WIDTH HEIGHT)
(= WIDTH HEIGHT)

(define I1(rectangle 10 20 "solid" "red"))
(define I2(rectangle 20 10 "solid" "blue"))

(if(< (image-width I2)
      (image-height I2))
      (image-width I2)
      (image-height I2))

(if(< (image-width I2)
      (image-height I2))
      (image-width I2)
      (image-height I2))
    
(if(< (image-width I1)
      (image-height I1))
      (image-width I2)
      (image-height I2))