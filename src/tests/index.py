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
    navigation_list = ["Home", "About", "Menu", "Reservations"]

    for item in navigation_list:
      link = self.driver.find_element_by_link_text(item)
      link.click()
      time.sleep(3)

    logo = self.driver.find_element_by_xpath("//*[@id='root']/div/div/nav/a/img")
    logo.click()
    time.sleep(3)

  def reservation_test(self):
    field_list = ["first_name", "last_name", "phone_number", "party_size"]
    keys_list = ["John", "Doe", "4081234567", "4"]

    reservations = self.driver.find_element_by_link_text("Reservations")
    reservations.click()
    time.sleep(3)

    for item in field_list:
      idx = field_list.index(item)

      field = self.driver.find_element_by_id(item)
      field.clear()
      field.send_keys(keys_list[idx])
      time.sleep(3)

    reserve_button = self.driver.find_element_by_class_name("btn")
    reserve_button.click()
    time.sleep(3)

  def close(self):
    self.driver.close()

ff = Jamieskitchen_test()
ff.navigation_test()
ff.reservation_test()
ff.close()