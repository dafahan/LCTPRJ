import pandas as pd
import random
import string

# Create a list of all possible question_id combinations from "a1" to "f6"
all_question_ids = [f"{letter}{number}" for letter in 'abcdef' for number in range(1, 7)]

# Read the data from template.csv with a semicolon separator
df = pd.read_csv('template.csv', sep=";")

# Check if the number of rows matches the number of possible question_id combinations
if len(df) != len(all_question_ids):
    raise ValueError("Number of rows in the data does not match the number of possible question_id combinations.")

# Shuffle the rows to randomize the order
df = df.sample(frac=1, random_state=42).reset_index(drop=True)

# Assign the unique question_id values to the data
df['question_id'] = all_question_ids

# Reorder the columns
df = df[['question_id', 'question', 'answer']]

# Write the randomized data to a new CSV file with a semicolon separator
df.to_csv('soal.csv', index=False, sep=";")

print("Data has been randomized with unique IDs and saved to soal.csv")

# Read the data from soal.csv with a semicolon separator
df = pd.read_csv('soal.csv', sep=";")

# Sort the data by question_id in ascending order
df = df.sort_values(by='question_id')

# Write the sorted data to a new CSV file with a semicolon separator
df.to_csv('soal.csv', index=False, sep=";")

print("Data has been sorted and saved to soal_sorted.csv")


# Sort the data by question_id in ascending order
df = df.sort_values(by='question_id')

# Write the sorted data to a new CSV file
df.to_csv('soal.csv', index=False)

print("Data has been sorted and saved to soal_sorted.csv")
