# app.py (for Streamlit)
import streamlit as st

# Set the title 
st.title("Deep Focus Timer")

#  main functionality (e.g., a timer)
import time
import threading

# Function to start the timer
def start_timer():
    for i in range(52, 0, -1):
        st.session_state.timer = i
        time.sleep(60)  # Sleep for 1 minute
        st.experimental_rerun()  # Reload the page to update the timer

# Check if timer exists in session state
if 'timer' not in st.session_state:
    st.session_state.timer = 52

# Display the current timer
st.write(f"Time remaining: {st.session_state.timer} minutes")

# Button to start the timer
if st.button('Start Timer'):
    threading.Thread(target=start_timer).start()



'''from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
    '''


