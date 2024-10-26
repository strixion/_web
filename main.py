from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.camera import Camera
from kivy.uix.popup import Popup
from kivy.uix.floatlayout import FloatLayout
from kivy.animation import Animation
from kivy.core.window import Window
from kivy.graphics.texture import Texture
from PIL import Image as PILImage
import numpy as np
import io

Window.size = (360, 640)

class CameraScreen(Screen):
    def __init__(self, **kwargs):
        super(CameraScreen, self).__init__(**kwargs)
        layout = BoxLayout(orientation='vertical')
        self.camera = Camera(play=True, resolution=(640, 480))
        layout.add_widget(self.camera)
        scan_button = Button(text="Сканировать чек", size_hint=(1, 0.2),
                             background_color=(0, 0.7, 0.3, 1), font_size=24)
        scan_button.bind(on_press=self.capture_image)
        layout.add_widget(scan_button)

        self.add_widget(layout)

    def capture_image(self, instance):
        texture = self.camera.texture
        size = texture.size
        pixels = texture.pixels
        image = PILImage.frombytes(mode='RGBA', size=size, data=pixels)
        image_np = np.array(image)
        image.save("captured_image.png")
        recognized_text = self.recognize_text(image_np)
        self.show_receipt_text(recognized_text)

    def recognize_text(self, image_np):
        return "Тестовый текст с фотографии"

    def show_receipt_text(self, text):
        content = FloatLayout()
        label = Label(text=text, pos_hint={"center_x": 0.5, "center_y": 0.6}, font_size=18)
        content.add_widget(label)
        close_button = Button(text="X", size_hint=(0.1, 0.1), pos_hint={"right": 0.95, "top": 0.95},
                              background_color=(1, 0, 0, 1))
        close_button.bind(on_press=self.close_popup)
        content.add_widget(close_button)
        close_text_button = Button(text="Закрыть", size_hint=(0.5, 0.2), pos_hint={"center_x": 0.5, "y": 0.1})
        close_text_button.bind(on_press=self.close_popup)
        content.add_widget(close_text_button)
        self.popup = Popup(title="Распознанный текст", content=content, size_hint=(0.9, 0.6))
        self.popup.open()

        return content

    def close_popup(self, instance):
        self.popup.dismiss()

class ProfileScreen(Screen):
    def __init__(self, **kwargs):
        super(ProfileScreen, self).__init__(**kwargs)
        layout = BoxLayout(orientation='vertical')
        label = Label(text="Профиль", font_size=32)
        layout.add_widget(label)

        self.add_widget(layout)

class MainApp(App):
    def build(self):
        sm = ScreenManager()
        self.camera_screen = CameraScreen(name="camera")
        self.profile_screen = ProfileScreen(name="profile")
        sm.add_widget(self.camera_screen)
        sm.add_widget(self.profile_screen)
        nav_bar = BoxLayout(size_hint=(1, 0.1), orientation='horizontal', padding=10, spacing=10)
        cam_button = Button(text="Камера", background_color=(0.5, 0.5, 1, 1), font_size=18)
        cam_button.bind(on_press=lambda x: self.switch_screen(sm, "camera"))
        nav_bar.add_widget(cam_button)
        profile_button = Button(text="Профиль", background_color=(1, 0.5, 0.5, 1), font_size=18)
        profile_button.bind(on_press=lambda x: self.switch_screen(sm, "profile"))
        nav_bar.add_widget(profile_button)

        root_layout = BoxLayout(orientation='vertical')
        root_layout.add_widget(sm)
        root_layout.add_widget(nav_bar)

        self.startup_animation(root_layout)

        return root_layout

    def switch_screen(self, screen_manager, screen_name):
        screen_manager.current = screen_name

    def startup_animation(self, root_layout):
        anim = Animation(opacity=0, duration=0) + Animation(opacity=1, duration=1)
        anim.start(root_layout)

if __name__ == '__main__':
    MainApp().run()
