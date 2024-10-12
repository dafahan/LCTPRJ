import csv

def load_data(filepath):
    soal = {}
    jawaban = {}
    with open(filepath, newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter=';', quotechar='"')
        for row in reader:
            # Skip rows that don't have at least 3 columns (question_id, question, and answer)
            if len(row) < 3:
                print(f"Skipping malformed row: {row}")
                continue
            key = row[0]
            soal[key] = row[1]
            jawaban[key] = row[2]
    return soal, jawaban
