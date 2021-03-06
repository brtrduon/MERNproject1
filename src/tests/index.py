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

  def reservation_test(self):
    reservations = self.driver.find_element_by_link_text("Reservations")
    reservations.click()
    time.sleep(3)

    first_name_field = self.driver.find_element_by_id("first_name")
    first_name_field.clear()
    first_name_field.send_keys("John")
    time.sleep(2)

    last_name_field = self.driver.find_element_by_id("last_name")
    last_name_field.clear()
    last_name_field.send_keys("Doe")
    time.sleep(2)

    phone_number_field = self.driver.find_element_by_id("phone_number")
    phone_number_field.clear()
    phone_number_field.send_keys("4081234567")
    time.sleep(2)

    party_size_field = self.driver.find_element_by_id("party_size")
    party_size_field.clear()
    party_size_field.send_keys("4")
    time.sleep(2)

    reserve_button = self.driver.find_element_by_class_name("btn")
    reserve_button.click()
    time.sleep(3)

  def close(self):
    self.driver.close()

ff = Jamieskitchen_test()
ff.navigation_test()
ff.reservation_test()
ff.close()