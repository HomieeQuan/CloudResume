from flask import Flask, request, jsonify, make_response
from datetime import datetime, timedelta
import time
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app,origins='*')

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
           'users': [
               'john',
               'doe',
           ] 
        }
    )

@app.route('/api/visitorcount', methods=['GET'])
def visitorcount():
    response = make_response(jsonify({
           'visitorcount':7, 
        }))
    visit(response)
    return response
        
    





def visit(response):
    # Get the current time
    current_time = datetime.utcnow()
    # Get the 'last_visit' cookie if it exists
    last_visit_cookie = request.cookies.get('last_visit')

    if last_visit_cookie:
        # Convert the cookie timestamp back to datetime
        last_visit_time = datetime.strptime(last_visit_cookie, '%Y-%m-%d %H:%M:%S')
        
        # Check if the time difference is greater than 8 hours
        if current_time - last_visit_time > timedelta(minutes=5):
            new_visit = True
        else:
            new_visit = False
    else:
        # First visit
        new_visit = True

    

    if new_visit:
        # Update or set the 'last_visit' cookie with the current timestamp
        response.set_cookie('last_visit', current_time.strftime('%Y-%m-%d %H:%M:%S'), max_age=8*3600)
    
    




if __name__ == '__main__':
    app.run(debug=True, port=8080)