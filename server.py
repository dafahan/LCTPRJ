from flask import Flask, render_template, request, redirect, url_for, session,flash
from flask_socketio import SocketIO, emit
import csv
import pymysql





app = Flask(__name__)
socketio = SocketIO(app)
app.secret_key = 'dafahan'
app.debug = True
connection = pymysql.connect(
    host='localhost',
    user='root',
    password='',
    db='test'
)
@app.route('/', methods=["POST","GET"])

def index():

    return render_template('sign-in.html')

@app.route('/peserta', methods=["POST","GET"])

def peserta():
	username = session['username']
	if 'loggedin' in session:
		return render_template('peserta.html',username = username)
	flash('Return Failed','danger')
	return redirect(url_for('login'))
   

@app.route('/panel', methods=["POST","GET"])

def panel():
	username = session.get('username')
	if 'loggedin' in session and username == 'admin':
		return render_template('panel.html')
	flash('Return Failed','danger')
	return redirect(url_for('login'))
   


@app.route('/login',methods=["POST","GET"])
def login():
	if 'loggedin' in session:
		username = session.get('username')
		if username == 'admin':
			return redirect(url_for('panel'))
		else:
			return redirect(url_for('peserta'))
	if request.method == 'POST':
		username = request.form.get('username')
		password = request.form.get('password')
		cursor = connection.cursor()
		cursor.execute('SELECT * FROM user WHERE username=%s AND password=%s', (username, password))
		result = cursor.fetchone()
		if result:
			session['loggedin'] = True
			session['username'] = username
			if username == 'admin':
				flash(f"Return Success {username}", "primary")
				return redirect(url_for('panel'))
			else:
				flash(f"Return Success {username}", "primary")
				return redirect(url_for('peserta'))
		else:
			flash('Return Failed','danger')
			return render_template('sign-in.html')
	else:
		return render_template('sign-in.html')

@app.route('/soal')
def soal():
	return render_template('soal.html',quiz=soal['a1'],ans=awaban['a1'])

@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('username', None)
    return redirect(url_for('login'))


#LOGIC BEL
@socketio.on('button-click')
def handle_button_click(data):
    button_state = data.get('button_state', False)
    username = data.get('username')
    emit('button-state', {'button_state': button_state,'username' : username}, broadcast=True)
    if button_state:
        emit('button-enable', broadcast=True)
    else:
    	emit('button-disable')

if __name__ == '__main__':
	socketio.run(app,host='10.20.29.52',port=5000)
 
