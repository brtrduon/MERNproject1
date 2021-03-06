from selenium import webdriver
import time

class Jamieskitchen_test():
  def __init__(self):
    self.baseUrl = "http://localhost:3000/"
    self.driver = webdriver.Chrome()

    self.driver.maximize_window()
    self.driver.get(self.baseUrl)
    self.driver.implicitly_wait(5)

ff = Jamieskitchen_test()