import telebot
token="7761786518:AAH0RsQPGl4DAFfGRmsKtwBoYtFs2gz_Zzg"
bot=telebot.TeleBot(token)
@bot.message_handler(commands=['start'])
def start_message(message):
  bot.send_message(message.chat.id,"Привет ✌️ ")
bot.infinity_poling()