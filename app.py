import sys
from flask import Flask, render_template, send_from_directory, request, jsonify
from read import load_data
from convert import convert
import keyboard

app = Flask(__name__, static_url_path='/static')
app.debug = True

if len(sys.argv) < 2:
    print("Usage: python app.py <arg1>")
    exit
else:
    arg1 = sys.argv[1].lower()
    babak = arg1
    print(babak)
    filepath = f"soal/{babak}.csv"
    if arg1 not in ['final','semifinal1','semifinal2']:
       convert(filepath)
    

soal, jawaban = load_data(filepath)
retrieved_keys = set()

def retrieve():
     with open('output.txt', 'w', encoding='utf-8') as output_file:
            output_file.write("soal:\n")
            for item in soal :
                if item not in retrieved_keys:
                    output_file.write(f"{item};{soal[item]};{jawaban[item]}\n")

     
#C:\xampp\htdocs\prototypelct\readcsv.py

@app.route('/timeUp.mp3')
def send_timeup(): 
    return send_from_directory(app.static_folder, 'res/lct/timeUp.mp3')

@app.route('/getsoal', methods=['GET'])
def get_soal_jawaban():
    kodeSoal = request.args.get('kodeSoal')
    print(kodeSoal)
    quest = soal[kodeSoal]
    ans = jawaban[kodeSoal]
    retrieved_keys.add(kodeSoal)
    retrieve()
    return jsonify({'soal': quest, 'jawaban': ans})

@app.route('/lct')
def lct():
	return render_template('lct.html')

@app.route('/semifinal')
def semifinal():
	return render_template('soal2.html')


@app.route('/')
def index():
    return render_template('soal.html'  )

@app.route('/tes')
def tes():
	return render_template('prototype.html')

if __name__ == '__main__':
    app.run(host='localhost')
