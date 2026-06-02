from playwright.sync_api import sync_playwright
import pathlib
url = "file://" + str(pathlib.Path("jacques-brand-book.html").resolve())
shots = {"cover":"section.cover","identity-card":"#identity-card","system-icons":"#system-icons"}
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1440,"height":1000},device_scale_factor=2)
    pg.goto(url,wait_until="networkidle",timeout=60000); pg.wait_for_timeout(1200)
    for n,s in shots.items():
        el=pg.query_selector(s)
        if el: el.screenshot(path=f".tmp-verify-{n}.png"); print("ok",n)
    b.close()
