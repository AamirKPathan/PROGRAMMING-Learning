; 1) Is IMAGE1 taller than IMAGE2?
(> (image-height IMAGE1) (image-height IMAGE2))

; 2) Is IMAGE1 narrower than IMAGE2?
(< (image-width IMAGE1) (image-width IMAGE2))

; 3) Does IMAGE1 have the same width AND height as IMAGE2?
(and (= (image-width IMAGE1) (image-width IMAGE2))
     (= (image-height IMAGE1) (image-height IMAGE2)))
