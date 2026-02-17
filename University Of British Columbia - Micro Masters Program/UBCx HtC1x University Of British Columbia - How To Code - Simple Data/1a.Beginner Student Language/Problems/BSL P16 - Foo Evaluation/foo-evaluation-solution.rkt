;; foo-evaluation-starter.rkt

(define (foo s)
  (if (string=? (substring s 0 1) "a")
      (string-append s "a")
      s))

(foo (substring "abcde" 0 3))
;; evaluate inner substring
;; → (substring "abcde" 0 3)
;; → "abc"

(foo "abc")
;; expand foo with s = "abc"
;; → (if (string=? (substring "abc" 0 1) "a")
;;       (string-append "abc" "a")
;;       "abc")

;; evaluate the condition
;; → (string=? (substring "abc" 0 1) "a")
;; → (string=? "abc"[0:1] "a")
;; → (substring "abc" 0 1)
;; → "a"
;; → (string=? "a" "a")
;; → #t

;; since condition is true, take then-branch
;; → (string-append "abc" "a")
;; → "abca"
