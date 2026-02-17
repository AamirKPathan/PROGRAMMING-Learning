(require 2htdp/image)

(define blue-square   (square 50 "solid" "blue"))
(define yellow-square (square 50 "solid" "yellow"))

(define top-row
  (beside blue-square yellow-square))

(define bottom-row
  (beside yellow-square blue-square))

(define final-image
  (above top-row bottom-row))

final-image
