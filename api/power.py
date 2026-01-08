import httpx

def handler(request):
    url = "https://panel.danbot.host/api/client/servers/dfec9f90/power"

    # If you need dynamic action, allow ?signal=start|stop|restart
    signal = request.query.get("signal", "start")

    payload = {"signal": signal}

    headers = {
        "Content-Type": "application/json"
        # If you need auth:
        # "Authorization": "Bearer YOUR_API_KEY"
    }

    r = httpx.post(url, json=payload, headers=headers)

    return {
        "status": r.status_code,
        "result": r.text
    }
