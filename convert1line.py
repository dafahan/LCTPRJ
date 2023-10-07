pseudocode = """
START pseudocode

SET n =7
SET fibonacci1 = 1
SET fibonacci2 = 2

DISPLAY fibonacci1

FOR i = 2 TO n
    SET fibonacci = fibonacci1 + fibonacci2
    DISPLAY fibonacci
    SET fibonacci1 = fibonacci2
    SET fibonacci2 = fibonacci
ENDFOR

END pseudocode
"""

# Remove leading and trailing whitespace and split lines
lines = pseudocode.strip().split('\n')

# Join lines into a single line with "<br>" as a separator
single_line_pseudocode = '<br>'.join(lines)

print(single_line_pseudocode)
