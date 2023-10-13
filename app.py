import sys
from flask import Flask, render_template,send_from_directory,request,jsonify
from read import load_data
from convert import convert
app = Flask(__name__, static_url_path='/static')
app.debug = True

if len(sys.argv) < 2:
    print("Usage: python app.py <arg1>")
    exit
else:
    arg1 = sys.argv[1].lower()
    babak = arg1
    filepath = f"soal/{babak}.csv"
    if arg1 != 'final':
        convert(filepath)
    

soal, jawaban = load_data(filepath)

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
    return jsonify({'soal': quest, 'jawaban': ans})

@app.route('/lct')
def lct():
	return render_template('lct.html')

@app.route('/')
def index():
    return render_template('soal.html'  )

@app.route('/tes')
def tes():
	return render_template('prototype.html')

if __name__ == '__main__':
    app.run(host='localhost')
