pseudocode = """
START pseudocode

SET num = 1234
SET x= 0

WHILE num > 0
    SET digit = num % 10
    SET x= (x * 10) + digit
    SET num = num / 10
ENDWHILE

DISPLAY x

END pseudocode
"""

# Remove leading and trailing whitespace and split lines
lines = pseudocode.strip().split('\n')

# Join lines into a single line with "<br>" as a separator
single_line_pseudocode = '<br>'.join(lines)

print(single_line_pseudocode)
