from selenium import webdriver
import time

class Jamieskitchen_test():
  def __init__(self):
    self.baseUrl = "http://localhost:3000/"
    self.driver = webdriver.Chrome()

    self.driver.maximize_window()
    self.driver.get(self.baseUrl)
    self.driver.implicitly_wait(5)

  def navigation_test(self):
    home = self.driver.find_element_by_link_text("Home")
    home.click()
    time.sleep(3)

    logo = self.driver.find_element_by_xpath("//*[@id='root']/div/div/nav/a/img")
    logo.click()
    time.sleep(3)

    about = self.driver.find_element_by_link_text("About")
    about.click()
    time.sleep(3)

    menu = self.driver.find_element_by_link_text("Menu")
    menu.click()
    time.sleep(3)

    reservations = self.driver.find_element_by_link_text("Reservations")
    reservations.click()
    time.sleep(3)

  def close(self):
    self.driver.close()

ff = Jamieskitchen_test()
ff.navigation_test()
ff.close()