from django.shortcuts import render, redirect
from django.contrib  import  messages
from django.contrib.auth import authenticate, login, logout

def sitelogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username = username, password = password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.add_message(request, messages.WARNING, 'login failed')
    return render(request, 'users/login.html')

def sitelogout(request):
    logout(request)
    redirect('sitelogin')



