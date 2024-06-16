from flask import Flask
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
load_dotenv()

app = Flask(__name__)

# get response
def get_response(query, chat_history):
    template = """
    You are a helpful assistant. Answer the following question considering chat history and user input.

    Chat History : {chat_history}

    User question : {user_question}
    """

    prompt = ChatPromptTemplate.from_template(template)

    llm = ChatOpenAI()

    parser = StrOutputParser()
    
    chain = prompt | llm | parser

    res = chain.invoke({
        "chat_history": chat_history,
        "user_question": query
    })

    return res

@app.route('/post_question')
def main():
    return get_response("tell me about bmi?", "i am good")

if __name__ == '__main__':
    app.run(debug=True)