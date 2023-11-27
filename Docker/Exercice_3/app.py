import calendar

print("Welcome to Calendar Application in Pyhton!!!!!!!")

# Get year from the user
year = int(input("Please enter any year:"))

# Get month from the user
month = int(input("Please enter any month:"))

# Display Calendar based on the year and month
print(calendar.month(year, month))

# End message
print("Nice work!")