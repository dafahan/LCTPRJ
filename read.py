import csv

def load_data(filename):
    soal = {}
    jawaban = {}

    with open(filename, 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file,delimiter=";")
        next(csv_reader) # skip header row

        for row in csv_reader:
            key = row[0]
            soal[key] = row[1]
            jawaban[key] = row[2]

    return soal, jawaban
