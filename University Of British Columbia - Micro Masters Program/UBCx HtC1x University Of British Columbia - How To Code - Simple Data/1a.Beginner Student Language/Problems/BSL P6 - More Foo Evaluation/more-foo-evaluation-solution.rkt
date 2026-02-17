(define (foo n)
  (* n n))

(foo (+ 3 4))
;; Step 1: evaluate the inner expression
;; → (+ 3 4)
;; → 7

(foo 7)
;; Step 2: apply the function definition
;; → (* 7 7)

(* 7 7)
;; Step 3: evaluate the multiplication
;; → 49
