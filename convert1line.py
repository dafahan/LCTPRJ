pseudocode = """
START pseudocode

SET a = 5

SET b = 2
a = a + b
b = a - b
a = a - b
DISPLAY a, b
END pseudocode
"""

# Remove leading and trailing whitespace and split lines
lines = pseudocode.strip().split('\n')

# Join lines into a single line with "<br>" as a separator
single_line_pseudocode = '<br>'.join(lines)

print(single_line_pseudocode)
